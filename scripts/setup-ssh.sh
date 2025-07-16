#!/bin/sh
mkdir -p ~/.ssh
echo "$SSH_PRIVATE_KEY" | tr -d '\r' > ~/.ssh/id_vercel
chmod 600 ~/.ssh/id_vercel
ssh-keyscan github.com >> ~/.ssh/known_hosts

# Tell SSH to use the right key
echo "Host github.com
  IdentityFile ~/.ssh/id_vercel
  IdentitiesOnly yes
" >> ~/.ssh/config
