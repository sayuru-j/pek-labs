export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          name: string;
          avatar_url: string | null;
          university: string | null;
          graduation_year: number | null;
          phone: string | null;
          is_verified: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          name: string;
          avatar_url?: string | null;
          university?: string | null;
          graduation_year?: number | null;
          phone?: string | null;
          is_verified?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          name?: string;
          avatar_url?: string | null;
          university?: string | null;
          graduation_year?: number | null;
          phone?: string | null;
          is_verified?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      projects: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          tech_stack: string[];
          complexity_level: string;
          category: string;
          base_price: number;
          estimated_duration: number;
          preview_images: string[];
          demo_url: string | null;
          github_url: string | null;
          documentation_url: string | null;
          is_template: boolean;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description?: string | null;
          tech_stack: string[];
          complexity_level: string;
          category: string;
          base_price: number;
          estimated_duration: number;
          preview_images: string[];
          demo_url?: string | null;
          github_url?: string | null;
          documentation_url?: string | null;
          is_template?: boolean;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string | null;
          tech_stack?: string[];
          complexity_level?: string;
          category?: string;
          base_price?: number;
          estimated_duration?: number;
          preview_images?: string[];
          demo_url?: string | null;
          github_url?: string | null;
          documentation_url?: string | null;
          is_template?: boolean;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      project_requests: {
        Row: {
          id: string;
          user_id: string | null;
          project_id: string | null;
          request_type: string;
          title: string;
          description: string | null;
          requirements: string | null;
          modifications: string | null;
          tech_preferences: string[];
          budget_range: string | null;
          deadline: string | null;
          status: string;
          priority: number;
          admin_notes: string | null;
          quoted_price: number | null;
          progress_link: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          project_id?: string | null;
          request_type: string;
          title: string;
          description?: string | null;
          requirements?: string | null;
          modifications?: string | null;
          tech_preferences: string[];
          budget_range?: string | null;
          deadline?: string | null;
          status?: string;
          priority?: number;
          admin_notes?: string | null;
          quoted_price?: number | null;
          progress_link?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          project_id?: string | null;
          request_type?: string;
          title?: string;
          description?: string | null;
          requirements?: string | null;
          modifications?: string | null;
          tech_preferences?: string[];
          budget_range?: string | null;
          deadline?: string | null;
          status?: string;
          priority?: number;
          admin_notes?: string | null;
          quoted_price?: number | null;
          progress_link?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      project_progress: {
        Row: {
          id: string;
          request_id: string;
          milestone: string;
          description: string | null;
          status: string;
          completion_percentage: number;
          estimated_completion: string | null;
          actual_completion: string | null;
          attachments: string[];
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          request_id: string;
          milestone: string;
          description?: string | null;
          status?: string;
          completion_percentage?: number;
          estimated_completion?: string | null;
          actual_completion?: string | null;
          attachments: string[];
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          request_id?: string;
          milestone?: string;
          description?: string | null;
          status?: string;
          completion_percentage?: number;
          estimated_completion?: string | null;
          actual_completion?: string | null;
          attachments?: string[];
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      communications: {
        Row: {
          id: string;
          request_id: string;
          sender_type: string;
          sender_id: string;
          message: string;
          attachments: string[];
          platform: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          request_id: string;
          sender_type: string;
          sender_id: string;
          message: string;
          attachments: string[];
          platform?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          request_id?: string;
          sender_type?: string;
          sender_id?: string;
          message?: string;
          attachments?: string[];
          platform?: string;
          created_at?: string;
        };
      };
    };
  };
}
