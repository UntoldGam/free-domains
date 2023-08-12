addSubDomain({
    domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
    subdomain: 'logging-server', // desired subdomain name
    owner: {
        email: 'charlessbird+github@outlook.com',
    },
    record: {
        A: ['130.162.166.23'],
        NS: ['ns1.p201.dns.oraclecloud.net.',
            'ns2.p201.dns.oraclecloud.net.',
            'ns3.p201.dns.oraclecloud.net.',
            'ns4.p201.dns.oraclecloud.net.'
        ],
    },
})
