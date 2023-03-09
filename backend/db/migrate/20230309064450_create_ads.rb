class CreateAds < ActiveRecord::Migration[7.0]
  def change
    create_table :ads do |t|
      t.integer :user_id
      t.integer :tag_id
      t.string :name
      t.string :description
      t.string :image
      t.integer :price

      t.timestamps
    end
  end
end
