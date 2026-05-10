import axios from "axios";

export async function getImagesByQuery(query, page) {
        
    
    
    const response = await axios.get('https://pixabay.com/api/', {
        params: {
            key: "55648790-38a13299ea8938e2088d7c8dc",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            page,
            per_page: 15,
            
        }
    });
        return response.data;
}

