SCRIPTPATH="$( cd "$(dirname "$0")" ; pwd -P )"
cp $SCRIPTPATH/../data/prepare-commit-msg.sh .git/hooks/prepare-commit-msg