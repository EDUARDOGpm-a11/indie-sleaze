document.getElementById('postButton').addEventListener('click', function() {
    const postContent = document.getElementById('postContent').value;
    const postImage = document.getElementById('postImage').files[0];
    const postCategory = document.getElementById('postCategory').value;
    const postsContainer = document.getElementById('postsContainer');

    if (postContent.trim() === '' && !postImage) {
        alert('Por favor, escribe algo o agrega una imagen.');
        return;
    }

    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    if (postCategory) {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');
        categoryDiv.textContent = `Categoría: ${postCategory}`;
        categoryDiv.style.fontStyle = 'italic';
        postDiv.appendChild(categoryDiv);
    }

    const contentDiv = document.createElement('div');
    contentDiv.textContent = postContent;
    postDiv.appendChild(contentDiv);

    if (postImage) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(postImage);
        postDiv.appendChild(img);
    }

    const likesDiv = document.createElement('div');
    likesDiv.classList.add('likes');

    const likeButton = document.createElement('button');
    likeButton.textContent = 'Me gusta';
    let likeCount = 0;
    const likeCounter = document.createElement('span');
    likeCounter.textContent = ` (${likeCount})`;

    likeButton.addEventListener('click', function() {
        likeCount++;
        likeCounter.textContent = ` (${likeCount})`;
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.classList.add('edit-button');
    editButton.addEventListener('click', function() {
        document.getElementById('postContent').value = postContent;
        document.getElementById('postCategory').value = postCategory;
        postDiv.remove(); // Elimina la publicación actual para editar
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
        postDiv.remove();
    });

    likesDiv.appendChild(likeButton);
    likesDiv.appendChild(likeCounter);
    likesDiv.appendChild(editButton);
    likesDiv.appendChild(deleteButton);
    postDiv.appendChild(likesDiv);

    postsContainer.prepend(postDiv);
    document.getElementById('postContent').value = '';
    document.getElementById('postImage').value = '';
    document.getElementById('postCategory').value = '';
});
