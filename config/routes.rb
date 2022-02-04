Rails.application.routes.draw do
  namespace :v1, defaults: { format: 'json' } do
    post 'auth/login', to: 'authentication#authenticate'
    post 'signup', to: 'users#create'
    
    resources 'restaurant', only: [ :index, :show ]
  end
end


