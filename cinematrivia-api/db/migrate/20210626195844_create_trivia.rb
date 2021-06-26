class CreateTrivia < ActiveRecord::Migration[5.2]
  def change
    create_table :trivia do |t|
      t.text :info 
      t.references :movie, foreign_key: true
      t.timestamps
    end
  end
end
