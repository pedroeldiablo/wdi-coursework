class CreateBuildings < ActiveRecord::Migration[5.0]
  def change
    create_table :buildings do |t|
      t.string :name
      t.string :location
      t.string :style
      t.string :architect
      t.string :building_photo
      t.string :date_completed
      t.string :borough
      t.string :north_south_east_west

      t.timestamps
    end
  end
end
