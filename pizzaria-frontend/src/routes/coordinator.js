export const goToHomePage = navigate => {
    navigate('/')
}

export const goToLoginPage = navigate => {
    navigate('/login')
}

export const goToRegisterPage = navigate => {
    navigate('/cadastre-se/registrar-endereco')
}

export const goToSignUpPage = navigate => {
    navigate('/cadastre-se')
}

export const goToAddRecipes = (navigate) => {
    navigate('/user/adicionar-receita')
}

export const goToCartPage = navigate => {
    navigate('/carrinho')
}

export const goToAdminPage = navigate => {
    navigate('/user/administracao')
}

export const goToOptionsProductPage = (navigate) => {
    navigate(`/user/administracao/editar-receita-lista`)
}

export const goToEditRecipePage = (navigate, id) => {
    navigate(`/user/administracao/editar-receita/${id}`)
}

export const goToProfilePage = (navigate,id) => {
    navigate(`/user/perfil`)
}

export const goToApprovePurchasePage = (navigate) => {
    navigate(`/finalizar-pedido`)
}

export const goToOrderHistoryPage = (navigate) => {
    navigate(`/user/perfil/historico-de-pedidos`)
}

export const goToItemOrderPage = (navigate, orderid ) => {
    navigate(`/user/perfil/itens-da-compra/${orderid}`)
}

export const goToLoginAdminPage = navigate => {
    navigate('/login-l')
}

