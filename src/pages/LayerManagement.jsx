import { useEffect, useState } from 'react';
import axios from 'axios';

function LayerManagement() {
    const [layers, setLayers] = useState([]);
    const [currentLayer, setCurrentLayer] = useState(null);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [formData, setFormData] = useState({ name: '', title: '', workspace: '' });

    const API_AUTH = { auth: { username: 'admin', password: 'minhkha277' } };

    const fetchLayers = () => {
        axios
            .get('/geoserver/rest/layers', API_AUTH)
            .then((response) => {
                console.log(response);

                setLayers(response.data.layers.layer);
            })
            .catch((error) => console.error('Error fetching layers:', error));
    };

    // Fetch all layers
    useEffect(() => {
        fetchLayers();
    }, []);

    // Handle form input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    // Handle form submission (Add or Edit Layer)
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const method = currentLayer ? 'put' : 'post';
        const endpoint = currentLayer ? `/geoserver/rest/layers/${currentLayer.name}` : '/geoserver/rest/layers';

        axios[method](endpoint, formData, API_AUTH)
            .then(() => {
                fetchLayers();
                setIsFormVisible(false);
                setFormData({ name: '', title: '', workspace: '' });
                setCurrentLayer(null);
            })
            .catch((error) => console.error('Error saving layer:', error));
    };

    // Edit a layer
    const handleEditLayer = (layer) => {
        setCurrentLayer(layer);
        setFormData({ name: layer.name, title: layer.title, workspace: layer.workspace });
        setIsFormVisible(true);
    };

    // Delete a layer
    const handleDeleteLayer = (layerName) => {
        axios
            .delete(`/geoserver/rest/layers/${layerName}`, API_AUTH)
            .then(() => fetchLayers())
            .catch((error) => console.error('Error deleting layer:', error));
    };

    // Toggle form visibility
    const toggleForm = () => {
        setIsFormVisible(!isFormVisible);
        setFormData({ name: '', title: '', workspace: '' });
        setCurrentLayer(null);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">GeoServer Layer Management</h1>
                <button onClick={toggleForm} className="bg-blue-600 text-white px-4 py-2 rounded-md">
                    {isFormVisible ? 'Close Form' : 'Add Layer'}
                </button>
            </div>

            {isFormVisible && (
                <form onSubmit={handleFormSubmit} className="bg-white p-6 rounded-lg shadow-md mb-4">
                    <h2 className="text-xl font-semibold mb-4">{currentLayer ? 'Edit Layer' : 'Add Layer'}</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Layer Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Workspace</label>
                            <input
                                type="text"
                                name="workspace"
                                value={formData.workspace}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <button type="submit" className="w-full px-4 py-2 mt-4 bg-green-600 text-white rounded-md">
                            {currentLayer ? 'Update Layer' : 'Add Layer'}
                        </button>
                    </div>
                </form>
            )}

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 bg-gray-200 text-left">Layer Name</th>
                            <th className="py-2 px-4 bg-gray-200 text-left">Title</th>
                            <th className="py-2 px-4 bg-gray-200 text-left">Workspace</th>
                            <th className="py-2 px-4 bg-gray-200 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {layers.map((layer) => (
                            <tr key={layer.name}>
                                <td className="border px-4 py-2">{layer.name}</td>
                                <td className="border px-4 py-2">{layer.title || 'No title'}</td>
                                <td className="border px-4 py-2">{layer.workspace || 'No workspace'}</td>
                                <td className="border px-4 py-2 text-center">
                                    <button
                                        onClick={() => handleEditLayer(layer)}
                                        className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteLayer(layer.name)}
                                        className="bg-red-600 text-white px-3 py-1 rounded-md"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default LayerManagement;
