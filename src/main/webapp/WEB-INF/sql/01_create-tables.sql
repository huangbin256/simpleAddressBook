-- quick EMPTY : truncate "user", "group", contact, groupcontact RESTART IDENTITY cascade;
-- quick DROP  : drop table  "user", "group", contact, groupcontact;

-- --------- user --------- --
CREATE TABLE "user"
(
	id bigserial NOT NULL,
	username character varying(128),
	pwd character varying(256),
	CONSTRAINT user_pkey PRIMARY KEY (id)
);
create index on "user" (username);
-- --------- /user --------- --


-- --------- group --------- --
CREATE TABLE "group"
(
	id bigserial NOT NULL,
	name character varying(128),
	CONSTRAINT group_pkey PRIMARY KEY (id)
);
-- --------- /group --------- --

-- --------- contact --------- --
CREATE TABLE contact
(
	id bigserial NOT NULL,
	email character varying(128),
	CONSTRAINT contact_pkey PRIMARY KEY (id)
);
-- --------- /contact --------- --

-- --------- groupcontact --------- --
CREATE TABLE groupcontact
(
	"groupId" bigint NOT NULL,
	"contactId" bigint NOT NULL,

	CONSTRAINT groupcontact_pkey PRIMARY KEY ("groupId","contactId")
);
-- --------- /teamuser --------- --

