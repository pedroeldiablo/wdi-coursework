class CreateScripts < ActiveRecord::Migration[5.0]
  def change
    create_table :scripts do |t|
      t.string :name
      t.string :import
      t.string :image
      t.string :link

      t.timestamps
    end
  end
end
