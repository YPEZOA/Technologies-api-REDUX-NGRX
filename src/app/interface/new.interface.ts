export interface INew {
  author: string;
  comment_text?: string;
  created_at: string;
  created_at_i?: number;
  num_comments?: number;
  objectID?: string;
  parent_id?: number;
  points?: number;
  story_id?: number;
  story_text?: string;
  story_title: string;
  story_url: string;
  title: string;
  url?: string;
  like?: boolean;
  _highlightResult?: Object;
  _tags?: Object;
}
