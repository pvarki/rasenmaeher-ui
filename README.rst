==================
UI For RASENMAEHER
==================

React, TS etc

Docker
------

For more controlled deployments and to get rid of "works on my computer" -syndrome, we always
make sure our software works under docker.

It's also a quick way to get started with a standard development environment.

SSH agent forwarding
^^^^^^^^^^^^^^^^^^^^

We need buildkit_::

    export DOCKER_BUILDKIT=1

.. _buildkit: https://docs.docker.com/develop/develop-images/build_enhancements/

And also the exact way for forwarding agent to running instance is different on OSX::

    export DOCKER_SSHAGENT="-v /run/host-services/ssh-auth.sock:/run/host-services/ssh-auth.sock -e SSH_AUTH_SOCK=/run/host-services/ssh-auth.sock"

and Linux::

    export DOCKER_SSHAGENT="-v $SSH_AUTH_SOCK:$SSH_AUTH_SOCK -e SSH_AUTH_SOCK"

Creating a development container
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Build image, create container and start it::

    docker build --ssh default --target devel_shell -t rasenmaeher_ui:devel_shell .
    docker create --name rmui_devel -v `pwd`":/app" -p 5173:5173 -it `echo $DOCKER_SSHAGENT` rasenmaeher_ui:devel_shell
    docker start -i rmui_devel

Note: due to the volume mapping if you already had run "npm install" on the host you need to delete the node_modules directory
and in any case you need to run "npm install" inside the container.


pre-commit considerations
^^^^^^^^^^^^^^^^^^^^^^^^^

If working in Docker instead of native env you need to run the pre-commit checks in docker too::

    docker exec -i rmui_devel /bin/bash -c "pre-commit install"
    docker exec -i rmui_devel /bin/bash -c "pre-commit run --all-files"

You need to have the container running, see above. Or alternatively use the docker run syntax but using
the running container is faster::

    docker run --rm -it -v `pwd`":/app" rasenmaeher_ui:devel_shell -c "pre-commit run --all-files"


Production docker
^^^^^^^^^^^^^^^^^

There's a "production" target as well for running the application, remember to change that
architecture tag to arm64 if building on ARM::

    docker build --ssh default --target production -t rasenmaeher_ui:amd64-latest .
    docker run -it --name rasenmaeher_ui rasenmaeher_ui:amd64-latest

Development
-----------

TLDR:

- Create and activate a Node 18 virtualenv::

    FIXME: Insert instructions

- change to a branch::

    git checkout -b my_branch

- Install project deps and pre-commit hooks::

    npm install
    pre-commit install
    pre-commit run --all-files

- Ready to go.

Remember to activate your virtualenv whenever working on the repo.
