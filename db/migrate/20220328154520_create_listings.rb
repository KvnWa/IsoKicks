class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.belongs_to :sneaker, null: false, foreign_key: true
      t.integer :size

      t.timestamps
    end
  end
end
