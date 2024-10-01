import Model, { attr } from '@ember-data/model';

export default class ProductModel extends Model {
  @attr('string') name;
  @attr('string') email;
  @attr('string') password;
  @attr('string') accountType;
  @attr('date') createdAt;
}
