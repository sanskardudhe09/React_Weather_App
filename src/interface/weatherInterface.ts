export interface WeatherData {
    name: string;
    main: {
        temp: number;
        humidity: number;
        temp_min: number;
        temp_max: number;
    };
    weather: {
        main: string;
        description: string;
        icon: string;
    }[];
};

export interface ForecastData {
    list: {
        dt_txt: string;
        main: { 
            temp: number 
        };
        weather: { 
            icon: string;
            main: string;
        }[];
    }[];
};

export interface SearchBarProps {
    onSearch: (city: string) => void;
};

export interface ForecastDisplayProps {
    forecast : ForecastData | null;
    error: string | null;
};

export interface WeatherDisplayProps {
    data: WeatherData | null;
    loading: boolean;
    error: string | null;
};