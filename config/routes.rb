Rails.application.routes.draw do
  devise_for :users
  root 'messages#index'
  resource :user, only: %i(edit update)
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:new, :create, :edit, :update]
end
