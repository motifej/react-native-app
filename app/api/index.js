import client, { setBaseEndpoint } from '../utils/apiClient';
import config from '../config';

setBaseEndpoint(config.apiHost);

// export const registerCustomer = (phone) => client.post('/api/customers/v1/auth/register', { data: { phone } });
export const registerCustomer = (phone) => Promise.resolve({
  'wallet': null,
  'created': 1517911767,
  'updated': 1517911767,
  'is_active': true,
  'id': '1',
  'email': null,
  'phone': phone,
  'meta': {}
});

// export const loginCustomer = (phone, code) => client.post('/api/customers/v1/auth/login', { data: { phone, code } });
export const loginCustomer = (phone, code) => Promise.resolve({
  'customer': '1',
  'expire': 1517913000,
  'token': 'YOUR_AUTHORIZATION_TOKEN',
});

// export const getCurrentCustomer = () => client.get('/api/customers/v1/customer');
export const getCurrentCustomer = () => Promise.resolve({
  'customer': '1',
  'expire': 1517913000,
  'token': 'YOUR_AUTHORIZATION_TOKEN',
});

// export const getCustomersTickets = () => client.get('/api/customers/v1/tickets');
export const getCustomersTickets = () => Promise.resolve([
  {
    'barcode': null,
    'category': null,
    'created': 1519145987,
    'customer': '1',
    'event': {
      'contract': null,
      'created': 1519145987,
      'description': null,
      'end': null,
      'external_id': null,
      'group': '1',
      'id': '1',
      'ipfs': null,
      'is_active': false,
      'is_refundable': false,
      'is_trasferable': false,
      'language': 'ru',
      'limit': null,
      'limit_per_holder': null,
      'media': null,
      'meta': {},
      'name': 'Test Event',
      'organizer': {
        'contacts': {},
        'created': 1519145987,
        'external_id': null,
        'id': '1',
        'is_active': True,
        'legals': {},
        'name': 'Test Org',
        'updated': 1519145987,
        'wallet': null
      },
      'sale_end': null,
      'sale_start': null,
      'start': null,
      'state': 'new',
      'updated': 1519145987,
      'venue': {
        'address': '1737 Karl Turnpike Apt. 235 Brandonland, WI 15575',
        'country_code': 'WS',
        'lat': 55.7511539,
        'lon': 37.595973,
        'name': 'Cynthia Rose',
        'region': '',
        'zip_code': ''
      }
    },
    'external_id': null,
    'id': '1',
    'ipfs': null,
    'is_active': True,
    'price': {'currency': 'RUB', 'nominal': 200},
    'seat': {'number': 1, 'row': 5},
    'status': 'new',
    'ticket': null,
    'type': 'common',
    'updated': 1519145987,
    'uses': 1
  }
]);
