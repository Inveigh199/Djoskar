import type { ReactNode } from "react";

export interface NavLink {
  href: string;
  label: string;
}

export interface Playlist {
  id: string;
  name: string;
  spotifyId: string;
}

export interface Project {
  category: string;
  title: string;
  video: string;
}

export interface Service {
  icon: ReactNode;
  title: string;
  desc: string;
}

export interface GalleryImage {
  src: string;
  label: string;
  span: string;
}

export interface VisionCard {
  title: string;
  img: string;
}

export interface Testimonial {
  id: string;
  firstName: string;
  lastName: string;
  location: string;
  text: string;
}
