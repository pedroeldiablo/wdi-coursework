class AddUsersToBuildings < ActiveRecord::Migration[5.0]
  def change
    add_reference :buildings, :user, foreign_key: true
  end
end
