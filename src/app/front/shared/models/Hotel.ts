export interface Hotel {
    id?: number;
    name: string;
    location: Location;
    rooms_count: number;
    description?: string;
    cover?: string;
    images: string[];
    gps_coordinate: string;
    createdAt?: Date;
    updatedAt?: Date;
    rooms: Room[];
    commentaires: Commentaire[];
  }
  
  export interface Location {
    address?: string;
    country: string;
    city: string;
  }
  
  export interface Room {
    id: number;
    num_room: string;
    room_type: string; // Adjust type if using enums
    price_per_night: string;
    capacity: string;
    description: string;
    is_available: string;
    images: string[];
    etage: number;
    equipments: string[];
    surface: number;
    createdAt: string; // Use Date if you want to handle dates as objects
    updatedAt: string; // Same as above
    hotel_id: number; // Link to hotel, but not the whole object
  }
  
  
  export interface Commentaire {
    // Définissez les champs de Commentaire selon votre modèle backend
  }