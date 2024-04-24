
const apiUrl = 'http://localhost:3001/producto';


const deleteButton = document.querySelector('[delete-button]');
const productIdInput = document.querySelector('[delete-id]'); 


deleteButton.addEventListener('click', async () => {
  try {
   
    const productId = productIdInput.value;

    
    const response = await fetch(`${apiUrl}/${productId}`, {
      method: 'DELETE',
      
    });

    if (response.ok) {
     
      console.log('Producto eliminado con éxito');
    } else {
      
      console.error('Error al eliminar el producto');
    }
  } catch (error) {
    console.error('Error de red:', error);
  }
});


