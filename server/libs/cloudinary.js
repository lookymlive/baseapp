import { v2 as cloudinary } from 'cloudinary';



    // Configuration
    cloudinary.config({ 
        cloud_name: 'dhnkojapo', 
        api_key: '535324329684496', 
        api_secret: 'k07NPaFNsnY2oqqRMKxOFqbl8sE' // Click 'View Credentials' below to copy your API secret
    })
    
    // Upload an image
      export const uploadImage = async filePath => {
        return await cloudinary.uploader.upload(filePath, {
            folder: 'pruebalookym'
          })
      }
   export const deleteImage = async (public_id) => {
    return await cloudinary.uploader.destroy(id)
  }

          
          


    