-- Create posts table (if not already exists)
CREATE TABLE posts (
   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
   title TEXT NOT NULL,
   slug TEXT UNIQUE NOT NULL,
   created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create likes table with unique constraint
CREATE TABLE post_likes (
    post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
    user_identifier TEXT NOT NULL,
    PRIMARY KEY (post_id, user_identifier),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT unique_post_like UNIQUE (post_id, user_identifier)
);

-- An index to optimize like count queries
CREATE INDEX idx_post_likes_post_id ON post_likes(post_id);

-- Function to get like count for a post
CREATE OR REPLACE FUNCTION get_post_like_count(p_post_id UUID)
RETURNS INTEGER AS $$
BEGIN
RETURN (
    SELECT COUNT(*)
    FROM post_likes
    WHERE post_id = p_post_id
);
END;
$$ LANGUAGE plpgsql;
