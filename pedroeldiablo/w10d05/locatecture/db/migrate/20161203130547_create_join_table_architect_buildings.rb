class CreateJoinTableArchitectBuildings < ActiveRecord::Migration[5.0]
  def change
    create_join_table :architects, :buildings do |t|
      # t.index [:architect_id, :building_id]
      # t.index [:building_id, :architect_id]
    end
  end
end
