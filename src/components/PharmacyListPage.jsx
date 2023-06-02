import React, { useState, useEffect } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

const PharmacyListPage = () => {
  const [pharmacies, setPharmacies] = useState([]);
  const [pharmacyData, setPharmacyData] = useState({
    id: '',
    name: '',
    address: '',
    altitude: 0,
    longitude: 0,
    photo: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchPharmacies();
  }, []);

  const fetchPharmacies = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/pharmacies/all');
      setPharmacies(response.data);
    } catch (error) {
      console.error('Error fetching pharmacies:', error);
    }
  };

  const addPharmacy = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/pharmacies/save', pharmacyData);
      setPharmacies([...pharmacies, response.data]);
      setShowModal(false);
      setPharmacyData({
        id: '',
        name: '',
        address: '',
        altitude: 0,
        longitude: 0,
        photo: ''
      });
    } catch (error) {
      console.error('Error adding pharmacy:', error);
    }
  };

  const updatePharmacy = async () => {
    try {
      await axios.put(`http://localhost:8080/api/pharmacies/update/${pharmacyData.id}`, pharmacyData);
      const updatedPharmacies = pharmacies.map((pharmacy) =>
        pharmacy.id === pharmacyData.id ? pharmacyData : pharmacy
      );
      setPharmacies(updatedPharmacies);
      setShowModal(false);
      setPharmacyData({
        id: '',
        name: '',
        address: '',
        altitude: 0,
        longitude: 0,
        photo: ''
      });
    } catch (error) {
      console.error('Error updating pharmacy:', error);
    }
  };

  const deletePharmacy = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/pharmacies/deletePharmacy/id=${id}`);
      const updatedPharmacies = pharmacies.filter((pharmacy) => pharmacy.id !== id);
      setPharmacies(updatedPharmacies);
    } catch (error) {
      console.error('Error deleting pharmacy:', error);
    }
  };

  const openEditModal = (pharmacy) => {
    setPharmacyData(pharmacy);
    setIsEditing(true);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setPharmacyData({
      id: '',
      name: '',
      address: '',
      altitude: 0,
      longitude: 0,
      photo: ''
    });
    setIsEditing(false);
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-4 text-center"  style={{color: "blue"}}>Liste des pharmacies</h1>
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>Ajouter une pharmacie</button>

      <table className="table mt-3">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Adresse</th>
            <th>Altitude</th>
            <th>Longitude</th>
            <th>Photo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pharmacies.map((pharmacy) => (
            <tr key={pharmacy.id}>
              <td>{pharmacy.name}</td>
              <td>{pharmacy.address}</td>
              <td>{pharmacy.altitude}</td>
              <td>{pharmacy.longitude}</td>
              <td>{pharmacy.photo}</td>
              <td>
                <button className="btn btn-sm btn-info mr-2" onClick={() => openEditModal(pharmacy)}>Modifier</button>
                <button className="btn btn-sm btn-danger" onClick={() => deletePharmacy(pharmacy.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{isEditing ? 'Modifier une pharmacie' : 'Ajouter une pharmacie'}</h5>
                <button type="button" className="close" onClick={closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <label>
                  Nom:
                  <input type="text" className="form-control" value={pharmacyData.name} onChange={(e) => setPharmacyData({ ...pharmacyData, name: e.target.value })} />
                </label>
                <label>
                  Adresse:
                  <input type="text" className="form-control" value={pharmacyData.address} onChange={(e) => setPharmacyData({ ...pharmacyData, address: e.target.value })} />
                </label>
                <label>
                  Altitude:
                  <input type="number" className="form-control" value={pharmacyData.altitude} onChange={(e) => setPharmacyData({ ...pharmacyData, altitude: e.target.value })} />
                </label>
                <label>
                  Longitude:
                  <input type="number" className="form-control" value={pharmacyData.longitude} onChange={(e) => setPharmacyData({ ...pharmacyData, longitude: e.target.value })} />
                </label>
                <label>
                  Photo:
                  <input type="text" className="form-control" value={pharmacyData.photo} onChange={(e) => setPharmacyData({ ...pharmacyData, photo: e.target.value })} />
                </label>
              </div>
              <div className="modal-footer">
                {isEditing ? (
                  <button className="btn btn-primary" onClick={updatePharmacy}>Modifier</button>
                ) : (
                  <button className="btn btn-primary" onClick={addPharmacy}>Ajouter</button>
                )}
                <button className="btn btn-secondary" onClick={closeModal}>Annuler</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PharmacyListPage;
