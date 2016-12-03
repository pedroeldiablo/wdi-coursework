class AddImageToBuildings < ActiveRecord::Migration[5.0]
  def change
    add_column :buildings, :image, :string
  end
end
