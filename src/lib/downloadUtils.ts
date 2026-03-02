import JSZip from 'jszip'

interface FileToDownload {
  url: string
  filename: string
}

/**
 * Download multiple files as a single zip archive
 * @param files Array of files with URL and filename
 * @param zipFilename Name for the downloaded zip file (without .zip extension)
 */
export async function downloadAsZip(files: FileToDownload[], zipFilename: string) {
  try {
    const zip = new JSZip()

    // Fetch all files and add them to the zip
    const fetchPromises = files.map(async (file) => {
      try {
        const response = await fetch(file.url)
        if (!response.ok) {
          console.warn(`Failed to fetch ${file.filename}`)
          return
        }
        const blob = await response.blob()
        zip.file(file.filename, blob)
      } catch (error) {
        console.warn(`Error fetching ${file.filename}:`, error)
      }
    })

    await Promise.all(fetchPromises)

    // Generate the zip file
    const content = await zip.generateAsync({ type: 'blob' })

    // Trigger download
    const link = document.createElement('a')
    link.href = URL.createObjectURL(content)
    link.download = `${zipFilename}.zip`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(link.href)
  } catch (error) {
    console.error('Error creating zip file:', error)
    alert('Failed to create zip file. Please try again.')
  }
}
