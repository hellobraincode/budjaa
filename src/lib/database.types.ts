export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      hero: {
        Row: {
          id: number
          title: string
          subtitle: string | null
          quote: string | null
          cta_text: string | null
          cta_link: string | null
          image_url: string | null
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: number
          title: string
          subtitle?: string | null
          quote?: string | null
          cta_text?: string | null
          cta_link?: string | null
          image_url?: string | null
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: number
          title?: string
          subtitle?: string | null
          quote?: string | null
          cta_text?: string | null
          cta_link?: string | null
          image_url?: string | null
          created_at?: string
          updated_at?: string | null
        }
      }
      about: {
        Row: {
          id: number
          content: string
          image_url: string | null
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: number
          content: string
          image_url?: string | null
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: number
          content?: string
          image_url?: string | null
          created_at?: string
          updated_at?: string | null
        }
      }
      achievements: {
        Row: {
          id: number
          year: number
          title: string
          description: string | null
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: number
          year: number
          title: string
          description?: string | null
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: number
          year?: number
          title?: string
          description?: string | null
          created_at?: string
          updated_at?: string | null
        }
      }
      gallery: {
        Row: {
          id: number
          image_url: string
          caption: string | null
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: number
          image_url: string
          caption?: string | null
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: number
          image_url?: string
          caption?: string | null
          created_at?: string
          updated_at?: string | null
        }
      }
      news: {
        Row: {
          id: number
          title: string
          content: string
          image_url: string | null
          created_at: string
          updated_at: string | null
          published: boolean
        }
        Insert: {
          id?: number
          title: string
          content: string
          image_url?: string | null
          created_at?: string
          updated_at?: string | null
          published?: boolean
        }
        Update: {
          id?: number
          title?: string
          content?: string
          image_url?: string | null
          created_at?: string
          updated_at?: string | null
          published?: boolean
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}