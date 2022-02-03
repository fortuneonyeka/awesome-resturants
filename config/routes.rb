Rails.application.routes.draw do
  namespace :v1, defaults: { format: 'json' } do
    post 'auth/login', to: 'authentication#authenticate'
    post 'signup', to: 'users#create'

    get '/reservations', to: 'reservations#index'
    post '/reservations', to: 'reservations#create'
    delete '/reservations/:id', to: 'reservations#destroy'
  end
end
