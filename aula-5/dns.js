/**
 * DNS
 * 
 * Domain name system - Nomes de domínio
 * 
 * É uma tabela de nomes de domínios legíveis para nós humanos que apontam para endereços IP's legíveis para os computadores
 * 
 * Os Bancos de dados dos DNS são distribuidos em apenas 13 servidores (clusters) ao redor do mundo 
 */

const dns = require('dns')

dns.promises.resolve('google.com.br').then(ip => console.log(ip))
dns.promises.lookup('google.com.br').then(ip => console.log(ip))
dns.promises.setServers(['142.250.79.35']).then(ip => console.log(ip))
dns.promises.resolveAny('facebook.com').then(ip => console.log(ip)).catch(err => console.log(err))



