package keeper

import (
	"github.com/twirote/planet/x/planet/types"
)

var _ types.QueryServer = Keeper{}
