#!/usr/bin/env python

import sys
from enconf import set_config
import asyncio
from enapi import api

def log_start(config):
    config.logger.info("Starting PEN Step1 server listening on {}://{}:{}/"
                       .format("https" if config.server_cert else "http",
                               config.server_address if config.server_address
                               else "*",
                               config.server_port))

if __name__ == "__main__":
    from uvicorn import Config, Server
    loop = asyncio.new_event_loop()
    config = set_config("penen", loop, sys.argv[1:])
    log_start(config)
    server = Server(Config(app=api(config),
                           host=config.server_address,
                           port=config.server_port,
                           ssl_certfile=config.server_cert
                               if config.server_cert else None,
                           loop=config.loop,
                           debug=config.enable_debug))
    config.loop.run_until_complete(server.serve())
else:
    loop = asyncio.get_event_loop()
    config = set_config(loop)
    log_start(config)
    app = api(config)

