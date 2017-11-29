# README


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|


### Association
- has_many :messages
- has_many :groups, through: :group_users
- has_many :group_users



## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belings_to :group


## group_usersテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|user_id|indteger|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## gourpsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|

### Associaton
- has_many :messages
- has_many :users, through: :group_users
- has_many :group_users
