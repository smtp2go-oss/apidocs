module.exports = {
  header: 'Report on email bounce statistics',
  description: 'Rate limited to 1 request(s) per 60 seconds',
  requestExample: {
    "api_key": "api-554407F347FB4689A35C07377E61B7D5"
  },
  responseExample: {
    "request_id": "2917fc07-d685-4fea-b49a-14087058461f",
    "data": {
      "emails": 159,
      "rejects": 0,
      "softbounces": 0,
      "hardbounces": 0,
      "bounce_percent": "0.00"
    }
  },
  parameters: {
    schema: {
      api_key: {
        name: 'api_key',
        type: 'string',
        description: 'A full API Key from the API Keys admin console.'
      }
    },
    example: {
      "api_key": "api-554407F347FB4689A35C07377E61B7D5"
    }
  },
  response200: {
    schema: {
        data: {
          emails: {
          name: 'emails',
          type: 'integer',
          description: 'The total number of emails send during the last 30 day period'
        },
        rejects: {
          name: 'rejects',
          type: 'integer',
          description: 'How many of those emails sent were rejected'
        },
        softbounces: {
          name: 'softbounces',
          type: 'integer',
          description: 'How many of those rejects were softbounces'
        },
        hardbounces: {
          name: 'hardbounces',
          type: 'integer',
          description: 'How many of those emails were hardbounces'
        },
        bounce_percent: {
          name: 'bounce_percent',
          type: 'string',
          description: 'Percentage of emails sent that were bounced'
        }
      },
      request_id: {
        name: 'request_id',
        type: 'string',
        description: 'A Unique ID for this request'
      }
    },
    example: {
      "request_id": "2917fc07-d685-4fea-b49a-14087058461f",
      "data": {
        "emails": 159,
        "rejects": 0,
        "softbounces": 0,
        "hardbounces": 0,
        "bounce_percent": "0.00"
      }
    }
  },
  response400: {
    schema: {
      data:	{
        error_code:	{
          name: 'error_code',
          type: 'string',
          description: 'An API Error Code string'
        },
        error: {
          name: 'error',
          type: 'string',
          description: 'An error string'
        }
      },
      request_id: {
        name: 'request_id',
        type: 'string',
        description: 'A Unique ID for this request'
      }
    },
    example: {
      "request_id": "22e5acba-43bf-11e6-ae42-408d5cce2644",
      "data": {
        "error_code": "E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED",
        "error": "You do not have permission to access this API endpoint"
      }
    }
  },
  response429: {
    schema: {
      data:	{
        error_code:	{
          name: 'error_code',
          type: 'string',
          description: 'An API Error Code string'
        },
        error: {
          name: 'error',
          type: 'string',
          description: 'An error string'
        }
      },
      request_id: {
        name: 'request_id',
        type: 'string',
        description: 'A Unique ID for this request'
      }
    },
    example: {
      "request_id": "22e5acba-43bf-11e6-ae42-408d5cce2644",
      "data": {
        "error_code": "E_ApiResponseCodes.REQ_LIMIT_EXCEEDED",
        "error": "This endpoint is rate limited to 1 request every 60 seconds"
      }
    }
  }
}
