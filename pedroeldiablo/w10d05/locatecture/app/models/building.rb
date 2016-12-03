class Building < ApplicationRecord
  has_and_belongs_to_many :architects

  mount_uploader :image, ImageUpLoaderUploader
end
