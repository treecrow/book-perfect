# crypto加密

> crypto 模块提供了加密功能，包含对 OpenSSL 的哈希、HMAC、加密、解密、签名、以及验证功能的一整套封装

## Certificate类

### 方法列表

方法                                 | more
---------------------------------- | ----
certificate.exportChallenge(spkac) | -
certificate.exportPublicKey(spkac) | -
certificate.verifySpkac(spkac)     | -

## Cipher类

方法                                                       | more
-------------------------------------------------------- | ----
cipher.final([output_encoding])                          | -
cipher.setAAD(buffer)                                    | -
cipher.getAuthTag()                                      | -
cipher.setAutoPadding(auto_padding=true)                 | -
cipher.update(data[, input_encoding][, output_encoding]) | -

## Decipher类

方法                                                         | more
---------------------------------------------------------- | ----
decipher.final([output_encoding])                          | -
decipher.setAAD(buffer)                                    | -
decipher.setAuthTag(buffer)                                | -
decipher.setAutoPadding(auto_padding=true)                 | -
decipher.update(data[, input_encoding][, output_encoding]) | -

## DiffieHellman类

方法                                                                                 | more
---------------------------------------------------------------------------------- | ----
diffieHellman.computeSecret(other_public_key[, input_encoding][, output_encoding]) | -
diffieHellman.generateKeys([encoding])                                             | -
diffieHellman.getGenerator([encoding])                                             | -
diffieHellman.getPrime([encoding])                                                 | -
diffieHellman.getPrivateKey([encoding])                                            | -
diffieHellman.getPublicKey([encoding])                                             | -
diffieHellman.setPrivateKey(private_key[, encoding])                               | -
diffieHellman.setPublicKey(public_key[, encoding])                                 | -
diffieHellman.verifyError                                                          | -

## ECDH类

方法                                                                        | more
------------------------------------------------------------------------- | ----
ecdh.computeSecret(other_public_key[, input_encoding][, output_encoding]) | -
ecdh.generateKeys([encoding[, format]])                                   | -
ecdh.getPrivateKey([encoding])                                            | -
ecdh.getPublicKey([encoding[, format]])                                   | -
ecdh.setPrivateKey(private_key[, encoding])                               | -

## Hash类

方法                                  | more
----------------------------------- | ----
hash.digest([encoding])             | -
hash.update(data[, input_encoding]) | -

## Hmac类

方法                                  | more
----------------------------------- | ----
hmac.digest([encoding])             | -
hmac.update(data[, input_encoding]) | -

## Sign类

方法                                      | more
--------------------------------------- | ----
sign.sign(private_key[, output_format]) | -
sign.update(data[, input_encoding])     | -

## Verify类

方法                                                     | more
------------------------------------------------------ | ----
verifier.update(data[, input_encoding])                | -
verifier.verify(object, signature[, signature_format]) | -

## crypto自身

### 方法列表

方法                                                                                     | more
-------------------------------------------------------------------------------------- | ---------------
crypto.createCipher(algorithm, password)                                               | -
crypto.createCipheriv(algorithm, key, iv)                                              | -
crypto.createDecipher(algorithm, password)                                             | -
crypto.createDecipheriv(algorithm, key, iv)                                            | -
crypto.createDiffieHellman(prime[, prime_encoding][, generator][, generator_encoding]) | -
crypto.createDiffieHellman(prime_length[, generator])                                  | -
crypto.createECDH(curve_name)                                                          | -
crypto.createHash(algorithm)                                                           | -
crypto.createHmac(algorithm, key)                                                      | -
crypto.createSign(algorithm)                                                           | -
crypto.createVerify(algorithm)                                                         | -
crypto.getCiphers()                                                                    | -
crypto.getCurves()                                                                     | -
crypto.getDiffieHellman(group_name)                                                    | -
crypto.getHashes()                                                                     | -
crypto.pbkdf2(password, salt, iterations, keylen, digest, callback)                    | -
crypto.pbkdf2Sync(password, salt, iterations, keylen, digest)                          | -
crypto.privateDecrypt(private_key, buffer)                                             | -
crypto.timingSafeEqual(a, b)                                                           | -
crypto.privateEncrypt(private_key, buffer)                                             | -
crypto.publicDecrypt(public_key, buffer)                                               | -
crypto.publicEncrypt(public_key, buffer)                                               | -
crypto.randomBytes(size[, callback])                                                   | 生成指定位数的随机buffer
crypto.setEngine(engine[, flags])                                                      | -

### 属性列表

属性                      | more
----------------------- | ----
crypto.constants        | -
crypto.DEFAULT_ENCODING | -
crypto.fips             | -
