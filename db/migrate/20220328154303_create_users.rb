class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :full_name
      t.string :address
      t.string :username
      t.string :session_token
      t.string :password_digest


      t.timestamps
    end
  end
end
