export interface MenuFile {
  format: string
  downloadUrl: string
}

export interface Menu {
  id: string
  name: string
  description: string
  type: string
  dimensions: {
    width: string
    height: string
  }
  orientation: 'landscape' | 'portrait' | string
  previewUrl: string
  viewUrl: string
  files: MenuFile[]
}

export interface MenuSection {
  id: string
  title: string
  description: string
  menus: Menu[]
}

export interface MenusProps {
  sections: MenuSection[]
  onMenuDownload?: (menuId: string, format: string) => void
  onMenuView?: (menuId: string) => void
}
