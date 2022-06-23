Rails.application.routes.draw do
  
  namespace :api do
    resources :courses do 
      resources :enrollments 
      get '/unenrolled', to: 'enrollments#unenrolledUsers'
      get '/enrolled', to: 'enrollments#enrolledUsers'
      get '/courseUsers', to: 'courses#courseUsers'
    end

    resources :users do
      get '/userCourses', to: 'users#userCourses'
    end
  end
  
end
