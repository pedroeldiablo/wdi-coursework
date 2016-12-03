class CreateArchitects < ActiveRecord::Migration[5.0]
  def change
    create_table :architects do |t|
      t.string :name
      t.string :practices
      t.string :photo

      t.timestamps
    end
  end
end
