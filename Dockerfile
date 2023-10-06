######################
# Base builder image #
######################
FROM node:18-bookworm as builder_base

ENV \
  # locale
  LC_ALL=C.UTF-8


RUN apt-get update && apt-get install -y \
        curl \
        git \
        bash \
        build-essential \
        tini \
        openssh-client \
        cargo \
        jq \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/* \
    # githublab ssh
    && mkdir -p -m 0700 ~/.ssh && ssh-keyscan gitlab.com github.com | sort > ~/.ssh/known_hosts \
    && true

SHELL ["/bin/bash", "-lc"]


####################################
# Base stage for production builds #
####################################
FROM builder_base as production_build
COPY ./docker/entrypoint.sh /docker-entrypoint.sh
# Fixme: do whatever builds we need to do wth full build image
RUN true \
    && chmod a+x /docker-entrypoint.sh \
    && true


#########################
# Main production build #
#########################
FROM node:18-bookworm-slim as production
COPY --from=production_build /docker-entrypoint.sh /docker-entrypoint.sh
# Copy build things from production_build so this production image can stay minimalis
RUN --mount=type=ssh apt-get update && apt-get install -y \
        bash \
        libffi8 \
        tini \
        jq \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/* \
    && chmod a+x /docker-entrypoint.sh \
    && true
ENTRYPOINT ["/usr/bin/tini", "--", "/docker-entrypoint.sh"]

#####################################
# Base stage for development builds #
#####################################
FROM builder_base as devel_build


#0############
# Run tests #
#############
FROM devel_build as test
COPY . /app
WORKDIR /app
ENTRYPOINT ["/usr/bin/tini", "--", "docker/entrypoint-test.sh"]
# Re run install to get the service itself installed
RUN docker/pre_commit_init.sh \
    && true

###########
# Hacking #
###########
FROM devel_build as devel_shell
# Copy everything to the image
COPY . /app
WORKDIR /app
RUN apt-get update && apt-get install -y zsh python3-pip \
    && sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" \
    && echo "source /root/.profile" >>/root/.zshrc \
    && pip3 install --break-system-packages git-up \
    && true
ENTRYPOINT ["/bin/zsh", "-l"]
