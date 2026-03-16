export type Database = {
  public: {
    Tables: {
      products: {
        Row: {
          id: string;
          name: string;
          price: number;
          category: string;
          description: string | null;
          image: string | null;
          available_today: boolean | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          price: number;
          category: string;
          description?: string | null;
          image?: string | null;
          available_today?: boolean | null;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["products"]["Insert"]>;
      };
      orders: {
        Row: {
          id: string;
          customer_name: string;
          phone: string;
          product_id: string | null;
          quantity: number;
          pickup_date: string;
          payment_screenshot: string | null;
          status: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          customer_name: string;
          phone: string;
          product_id?: string | null;
          quantity: number;
          pickup_date: string;
          payment_screenshot?: string | null;
          status?: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["orders"]["Insert"]>;
      };
      gallery: {
        Row: {
          id: string;
          image: string;
          caption: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          image: string;
          caption?: string | null;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["gallery"]["Insert"]>;
      };
      customers: {
        Row: {
          id: string;
          name: string;
          phone: string;
          order_count: number | null;
        };
        Insert: {
          id?: string;
          name: string;
          phone: string;
          order_count?: number | null;
        };
        Update: Partial<Database["public"]["Tables"]["customers"]["Insert"]>;
      };
    };
  };
};
