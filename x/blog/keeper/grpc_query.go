package keeper

import (
	"github.com/twirote/planet/x/blog/types"
)

var _ types.QueryServer = Keeper{}
