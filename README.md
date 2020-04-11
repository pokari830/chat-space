# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


# chat-space DB設計
## usersテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false|
|email|text|null: false|
|password|int|null: false|
### Association
- has_many :chats
- has_many :groups_users
- has_many :groups through: :groups_users

## groupsテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false|
### Association
- has_many :groups_users
- has_many :users through: :groups_users
- has_many :chats

## groups_usersテーブル
|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreignkey: true|
|group_id|integer|null: false, foreignkey: true|
### Association
- belongs_to user
- belongs_to group


## chatテーブル
|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|text|text||
|image|text||
### Association
- belongs_to :user
- belongs_to :group
