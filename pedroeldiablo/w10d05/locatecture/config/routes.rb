Rails.application.routes.draw do
  resources :architects
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  root 'buildings#index'
  get '/register', to: 'users#new'
  post '/register', to: 'users#create'



  resources :buildings
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
