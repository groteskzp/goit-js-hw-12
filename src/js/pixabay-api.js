import axios from "axios";

export function getImagesByQuery(query, page) {
        
    
    
    return axios.get('https://pixabay.com/api/', {
        params: {
            key: "55648790-38a13299ea8938e2088d7c8dc",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            page,
            per_page: 15,
            
        }
    }).then(response => response.data);
}

