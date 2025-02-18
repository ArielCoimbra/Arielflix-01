function selectProfile(profileElement) {
  // Remover a classe "selected" de todos os perfis
  const profiles = document.querySelectorAll('.profile');
  profiles.forEach(profile => {
    profile.classList.remove('selected');
  });

  // Adicionar a classe "selected" ao perfil clicado
  profileElement.classList.add('selected');
}
