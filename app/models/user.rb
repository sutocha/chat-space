class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

         validates :name, presence: true
         validates :email, presence: true
         validates :email, uniqueness: true


         has_many :messages
         has_many :group_users
         has_many :groups, through: :group_users

end
